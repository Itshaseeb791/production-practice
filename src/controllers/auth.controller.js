const supabase = require("../../config/supabase");

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;

  // 1️⃣ Create Auth User
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const userId = data.user.id;

  // 2️⃣ Insert into users table
  const { error: profileError } = await supabase
    .from("users")
    .insert({
      id: userId,
      name,
      role: "user",
    });

  if (profileError) {
    return res.status(400).json({ error: profileError.message });
  }

  res.json({
    message: "User created successfully",
    userId,
  });
};
