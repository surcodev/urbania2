import { Button, Input } from "antd";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 h-screen">
      <h1>Homepage</h1>
      <Button type="primary">Button</Button>
      <Button type="default">Button</Button>
      <Input className="w-40" placeholder="Basic usage" />
    </div>
  );
}
