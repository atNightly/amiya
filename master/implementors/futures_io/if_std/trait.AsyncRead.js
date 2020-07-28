(function() {var implementors = {};
implementors["async_h1"] = [{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_h1/server/struct.Encoder.html\" title=\"struct async_h1::server::Encoder\">Encoder</a>","synthetic":false,"types":["async_h1::server::encode::Encoder"]}];
implementors["async_io"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt;","synthetic":false,"types":["async_io::Async"]},{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for &amp;'_ <a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["async_io::Async"]}];
implementors["async_net"] = [{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_net/unix/struct.UnixStream.html\" title=\"struct async_net::unix::UnixStream\">UnixStream</a>","synthetic":false,"types":["async_net::unix::UnixStream"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for &amp;'_ <a class=\"struct\" href=\"async_net/unix/struct.UnixStream.html\" title=\"struct async_net::unix::UnixStream\">UnixStream</a>","synthetic":false,"types":["async_net::unix::UnixStream"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_net/struct.TcpStream.html\" title=\"struct async_net::TcpStream\">TcpStream</a>","synthetic":false,"types":["async_net::tcp::TcpStream"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for &amp;'_ <a class=\"struct\" href=\"async_net/struct.TcpStream.html\" title=\"struct async_net::TcpStream\">TcpStream</a>","synthetic":false,"types":["async_net::tcp::TcpStream"]}];
implementors["blocking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"blocking/struct.Unblock.html\" title=\"struct blocking::Unblock\">Unblock</a>&lt;T&gt;","synthetic":false,"types":["blocking::Unblock"]}];
implementors["futures_lite"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AssertAsync.html\" title=\"struct futures_lite::io::AssertAsync\">AssertAsync</a>&lt;T&gt;","synthetic":false,"types":["futures_lite::io::AssertAsync"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;","synthetic":false,"types":["futures_lite::io::BufReader"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["futures_lite::io::Cursor"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Empty.html\" title=\"struct futures_lite::io::Empty\">Empty</a>","synthetic":false,"types":["futures_lite::io::Empty"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Repeat.html\" title=\"struct futures_lite::io::Repeat\">Repeat</a>","synthetic":false,"types":["futures_lite::io::Repeat"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Take.html\" title=\"struct futures_lite::io::Take\">Take</a>&lt;T&gt;","synthetic":false,"types":["futures_lite::io::Take"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>, U:&nbsp;<a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Chain.html\" title=\"struct futures_lite::io::Chain\">Chain</a>&lt;T, U&gt;","synthetic":false,"types":["futures_lite::io::Chain"]}];
implementors["http_types"] = [{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"http_types/struct.Body.html\" title=\"struct http_types::Body\">Body</a>","synthetic":false,"types":["http_types::body::Body"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"http_types/struct.Request.html\" title=\"struct http_types::Request\">Request</a>","synthetic":false,"types":["http_types::request::Request"]},{"text":"impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"http_types/struct.Response.html\" title=\"struct http_types::Response\">Response</a>","synthetic":false,"types":["http_types::response::Response"]}];
implementors["smol"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"smol/struct.Async.html\" title=\"struct smol::Async\">Async</a>&lt;T&gt;","synthetic":false,"types":["smol::async_io::Async"]},{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for &amp;'_ <a class=\"struct\" href=\"smol/struct.Async.html\" title=\"struct smol::Async\">Async</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["smol::async_io::Async"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()