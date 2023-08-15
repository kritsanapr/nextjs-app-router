"use client";

import { Button } from "@mantine/core";

type Props = {
  text: string;
};

export default function Buttons({ text }: Props) {
  return (
    <div>
      <Button variant="light" radius="xl" size="md">
        {text}
      </Button>
    </div>
  );
}
