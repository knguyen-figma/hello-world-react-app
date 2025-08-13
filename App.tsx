import { Card, CardContent } from "./components/ui/card";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <h1 className="mb-2">Hello, World!</h1>
          <p className="text-muted-foreground">
            Welcome to your new React application
          </p>
        </CardContent>
      </Card>
    </div>
  );
}