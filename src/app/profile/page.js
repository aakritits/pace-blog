// app/profile/page.js
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function checkAuthAndGetUser() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("isAuthenticated");
  const userCredentials = cookieStore.get("userCredentials");

  if (!auth || auth.value !== "true" || !userCredentials) {
    return null;
  }

  try {
    const user = JSON.parse(decodeURIComponent(userCredentials.value));
    return user;
  } catch {
    return null;
  }
}

export default async function Profile() {
  const user = await checkAuthAndGetUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <h1 className="text-3xl">
        Welcome, {user.email}!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        You are successfully logged in.
      </p>

      <section className=" p-6 mb-6 shadow-md rounded-md border-orange-400 border">
        <h2 className="py-2">Your Details</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
        </ul>
      </section>

      <footer className="italic text-gray-600">
        <p>"The journey of a thousand miles begins with a single step."</p>
      </footer>
    </main>
  );
}
