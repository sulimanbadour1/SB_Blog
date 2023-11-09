"use client";
import Image from "next/image";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status } = useSession();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>Please, sign in to your account</h1>
        </div>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <Image src="/google.svg" width={28} height={28} alt="Google" />
          Sign in With Google
        </div>
        <div className={styles.socialButton}>
          <Image src="/githubWhite.svg" width={28} height={28} alt="Github" />
          Sign in With Github
        </div>
      </div>
    </div>
  );
};

export default page;
