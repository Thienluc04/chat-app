import { Content, Sidebar } from './components/common';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}
