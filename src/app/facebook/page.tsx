"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Facebook = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      <span>facebook page</span>
      <div>
        <Button as="a" variant="primary" onClick={() => handleBtn()}>
          Back Home
        </Button>
      </div>
    </div>
  );
};

export default Facebook;
