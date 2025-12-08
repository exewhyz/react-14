import Form from "../components/form";
import Weather from "../components/weather";

export default function Homepage() {
  return (
    <main className="flex items-center justify-center flex-col h-[calc(100vh-56px)]">
      <Form />
      <Weather />
    </main>
  );
}
