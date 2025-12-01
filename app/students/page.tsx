import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus } from "lucide-react"

const students = [
  {
    id: 1,
    name: "Иванов Алексей",
    grade: "11",
    course: "ЕГЭ",
    frequency: 2,
    currentTopic: "9 задание",
    currentScore: 82,
    telegram: "@ivanov_alex",
    phone: "+7 999 123-45-67",
  },
  {
    id: 2,
    name: "Петрова Мария",
    grade: "9",
    course: "ОГЭ",
    frequency: 1,
    currentTopic: "6 задание",
    currentScore: 28,
    telegram: "@petrova_m",
    phone: "+7 999 234-56-78",
  },
  {
    id: 3,
    name: "Сидоров Дмитрий",
    grade: "11",
    course: "ЕГЭ",
    frequency: 3,
    currentTopic: "27 задание",
    currentScore: 76,
    telegram: "@sidorov_d",
    phone: "+7 999 345-67-89",
  },
  {
    id: 4,
    name: "Козлова Анна",
    grade: "11",
    course: "ЕГЭ",
    frequency: 2,
    currentTopic: "8 задание",
    currentScore: 88,
    telegram: "@kozlova_a",
    phone: "+7 999 456-78-90",
  },
  {
    id: 5,
    name: "Новиков Павел",
    grade: "9",
    course: "ОГЭ",
    frequency: 1,
    currentTopic: "5 задание",
    currentScore: 31,
    telegram: "@novikov_p",
    phone: "+7 999 567-89-01",
  },
  {
    id: 6,
    name: "Федорова Елена",
    grade: "11",
    course: "ЕГЭ",
    frequency: 2,
    currentTopic: "12 задание",
    currentScore: 79,
    telegram: "@fedorova_e",
    phone: "+7 999 678-90-12",
  },
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Ученики</h1>
            <p className="mt-1 text-muted-foreground">Управление списком учеников</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Добавить ученика
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Поиск учеников..." className="pl-10" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Список учеников</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">№</TableHead>
                    <TableHead>ФИО</TableHead>
                    <TableHead>Класс</TableHead>
                    <TableHead>Курс</TableHead>
                    <TableHead>Регулярность</TableHead>
                    <TableHead>Текущая тема</TableHead>
                    <TableHead>Текущий балл</TableHead>
                    <TableHead>Телеграм</TableHead>
                    <TableHead>Номер телефона</TableHead>
                    <TableHead className="text-right">Приход</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.id}</TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {student.course}
                        </span>
                      </TableCell>
                      <TableCell>{student.frequency}x/нед</TableCell>
                      <TableCell>{student.currentTopic}</TableCell>
                      <TableCell>{student.currentScore}</TableCell>
                      <TableCell className="text-muted-foreground">{student.telegram}</TableCell>
                      <TableCell className="text-muted-foreground">{student.phone}</TableCell>
                      <TableCell className="text-right font-medium text-primary">
                        {(student.frequency * 1000).toLocaleString("ru-RU")} ₽
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
