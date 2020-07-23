initSidebarItems({"struct":[["Hkdf","Structure representing the HKDF, capable of HKDF-Expand and HKDF-Extract operations."],["HkdfExtract","Structure representing the streaming context of an HKDF-Extract operation ```rust # use hkdf::{Hkdf, HkdfExtract}; # use sha2::Sha256; let mut extract_ctx = HkdfExtract::::new(Some(b\"mysalt\")); extract_ctx.input_ikm(b\"hello\"); extract_ctx.input_ikm(b\" world\"); let (streamed_res, _) = extract_ctx.finalize();"],["InvalidLength","Structure for InvalidLength, used for output error handling."],["InvalidPrkLength","Error that is returned when supplied pseudorandom key (PRK) is not long enough."]]});