import React from "react";
import {
  clerkClient,
  getAuth,
  buildClerkProps,
  User,
} from "@clerk/nextjs/server";
import { GetServerSideProps, NextPage } from "next";
import { useUser } from "@clerk/nextjs";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : null;
  return { props: { ...buildClerkProps(req, { user }) } };
};

const HomePage: NextPage = (props) => {
  const [apiUser, setApiUser] = React.useState<User | null>(null);
  const { user: ssrUser } = useUser();

  React.useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/user");
      const data = await res.json();
      if (data.id) {
        setApiUser(data);
      }
    }
    try {
      getUser();
    } catch (err) {
      console.log("GET /api/user", err);
    }
  }, []);

  return (
    <div>
      <h1>Primary Next.js website</h1>
      <p>All sessions start from here.</p>
      {ssrUser && <p>User from SSR: {ssrUser.id}</p>}
      {apiUser && <p>User from API: {apiUser.id}</p>}
    </div>
  );
};

export default HomePage;
