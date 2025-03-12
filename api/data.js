// api/data.js

export default function handler(req, res) {
  const data = { message: "Hello from Vercel API!" };
  res.status(200).json(data);
}
//This file acts as your API endpoint, and it will be accessible through a public URL once deployed to Vercel.
