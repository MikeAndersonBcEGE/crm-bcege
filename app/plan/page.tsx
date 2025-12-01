import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function PlanPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">План подготовки</h1>
          <p className="mt-1 text-muted-foreground">Структура и прогресс обучения</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Данные плана</CardTitle>
            <CardDescription>План подготовки будет загружен из CMS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Подключите CMS</h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Данные для плана подготовки будут получены через API из вашей CMS системы
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
