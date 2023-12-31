import { useUser } from "@clerk/nextjs";
import {
  clerkClient,
  getAuth,
  buildClerkProps,
  User,
} from "@clerk/nextjs/server";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId } = getAuth(req);
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  return { props: { ...buildClerkProps(req, { user }) } };
};

const HomePage: NextPage = (props) => {
  const [apiUser, setApiUser] = useState<User | null>(null);
  const { user: ssrUser } = useUser();

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/user");
      const data: User | null = await res.json();
      if (data) {
        setApiUser(data);
      }
    }

    getUser().catch((err) => {
      console.warn("GET /api/user", err);
    });
  }, []);

  return (
    <div>
      <h1>Satellite Next.js website</h1>
      {ssrUser && <p>User from SSR: {ssrUser.id}</p>}
      {apiUser && <p>User from API: {apiUser.id}</p>}
    </div>
  );
};

export default HomePage;
