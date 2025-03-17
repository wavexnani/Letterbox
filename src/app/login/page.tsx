"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/signup");
  };
  return (
    <div>
      <div style={styles.image}>
        <Image src="/netflix.jpg" alt="logo" fill />
        <div style={styles.overlay}></div>
      </div>

      <div style={styles.header}>
        <div >Lerrer Boxd</div>
        <Image style={{borderRadius: "10px"}} src="/logo.png" alt="logo" width={110} height={100}></Image>
      </div>

      <div style={styles.loginContainer}>
        <div>Login</div>
        <div style={styles.formContainer}>
          <form action="#">
            <input style={styles.input} type="text" placeholder="Username" />
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
            />
            <button style={styles.loginButton} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>

      <div style={styles.signupContainer}>
        <button style={styles.signup} onClick={handleLogin}>
          Register
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  signup: {
    fontSize: "25px",
    color: "white",
    paddingLeft: "0",
    marginLeft: "0",
  },

  image: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute", // Ensures it covers the screen
    top: 0,
    left: 0,
  },

  signupContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    backgroundColor: "rgb(38, 38, 38, 0.8)",
    color: "white",
    height: "60px",
    width: "40%",
    margin: "auto",
    marginTop: "20px",
    borderRadius: "10px",
    zIndex: 1,
    position: "relative",
    fontSize: "25px",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay
  },

  loginContainer: {
    backgroundColor: "rgb(38, 38, 38, 0.8)",
    color: "white",
    height: "40vh",
    width: "40%",
    margin: "auto",
    marginTop: "20vh",
    borderRadius: "10px",
    zIndex: 1,
    position: "relative",
    padding: "30px",
    fontSize: "25px",
  },

  formContainer: {
    backgroundColor: "#1a1a1a",
    width: "60%",
    height: "70%",
    margin: "auto",
    marginLeft: "30%",
    marginTop: "20px",
    borderRadius: "20px",
    padding: "20px",
  },

  input: {
    width: "85%",
    height: "20px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "white",
    color: "black",
    fontSize: "13px",
    display: "block",
    margin: "auto",
    marginTop: "15px",
    marginBottom: "15px",
  },

  loginButton: {
    fontSize: "13px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#F7D943",
    color: "black",
    display: "block",
    margin: "auto",
    marginBottom: "15px",
  },

  header: {
    fontSize: "35px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 50px 0px 50px",
  },
};
