use amiya::{m, Amiya};

mod common;

// Extra data of Amiya must be Default + Send + Sync, and can't contain reference
#[derive(Default)]
struct ExData {
    header_ext_message: Option<String>,
}

fn main() {
    common::start_smol_workers();

    let amiya = Amiya::default()
        // Amiya support extra data attach in context, just set it's type as second argument
        .uses(m!(ctx: ExData => {
            println!(
                "Request {} from {}",
                ctx.req.url(),
                ctx.req.remote().unwrap_or("unknown address")
            );
            // then you can use ctx.ex to communicate with other middleware
            ctx.ex.header_ext_message.replace(String::from("Amiya Middleware ExData Test"));
            let result = ctx.next().await;
            if let Err(ref err) = result {
                eprintln!("Request process error: {}", err);
            }
            result
        }))
        .uses(m!(ctx: ExData => {
            ctx.next().await?;
            ctx.resp.set_body("Hello from Amiya!");
            // get message set by other middleware and use it 
            if let Some(message) = ctx.ex.header_ext_message.take() {
                ctx.resp.insert_header("X-Amiya-Ext", message);
            }
            Ok(())
        }));

    amiya.listen_block("[::]:8080").unwrap();
}
