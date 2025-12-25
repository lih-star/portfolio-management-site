// app/layout.tsx
import Link from "next/link";
import "../style/global.css";

export default function Navigation() {
    const user = null;
  return (
    <header>
      {/* 왼쪽 메뉴 */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      {/* 오른쪽 메뉴 */}
        {user ?  
            <Link href="/profile">
                <img src="/user-icon.svg" alt="User Profile" />
            </Link>
            :
            <nav>
                <Link href="/signup">Sign Up</Link>
                <Link href="/signin">Sign In</Link>
            </nav>
        }
    </header>
  );
}
