import { signInUpWithGitHub } from "../auth/auth";

export default function GithubButton() {
    const handleLogin = () => {
        signInUpWithGitHub();
    }
    return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: '#24292e',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      GitHub로 로그인
    </button>
  )
}
