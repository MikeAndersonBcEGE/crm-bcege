import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Clock, User } from "lucide-react"

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

const schedule = [
  { day: 0, startTime: "10:00", endTime: "11:00", student: "Иванов Алексей", course: "ЕГЭ", topic: "9 задание" },
  { day: 0, startTime: "14:00", endTime: "15:00", student: "Козлова Анна", course: "ЕГЭ", topic: "8 задание" },
  { day: 1, startTime: "11:00", endTime: "12:30", student: "Петрова Мария", course: "ОГЭ", topic: "6 задание" },
  { day: 2, startTime: "15:00", endTime: "16:30", student: "Сидоров Дмитрий", course: "ЕГЭ", topic: "27 задание" },
  { day: 3, startTime: "10:00", endTime: "11:00", student: "Новиков Павел", course: "ОГЭ", topic: "5 задание" },
  { day: 3, startTime: "16:00", endTime: "17:30", student: "Федорова Елена", course: "ЕГЭ", topic: "12 задание" },
  { day: 4, startTime: "12:00", endTime: "13:30", student: "Иванов Алексей", course: "ЕГЭ", topic: "10 задание" },
  { day: 5, startTime: "10:00", endTime: "11:00", student: "Петрова Мария", course: "ОГЭ", topic: "7 задание" },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Расписание</h1>
            <p className="mt-1 text-muted-foreground">Планирование занятий на неделю</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Добавить занятие
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          {weekDays.map((day, dayIndex) => {
            const dayLessons = schedule.filter((lesson) => lesson.day === dayIndex)
            return (
              <Card key={day}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-center text-sm font-medium">{day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-2">
                  {dayLessons.length > 0 ? (
                    dayLessons.map((lesson, index) => (
                      <div key={index} className="rounded-lg bg-secondary p-3 transition-colors hover:bg-secondary/80">
                        <div className="mb-2 flex items-center gap-1 text-xs text-primary">
                          <Clock className="h-3 w-3" />
                          <span>
                            {lesson.startTime} - {lesson.endTime}
                          </span>
                        </div>
                        <p className="text-sm font-medium leading-tight">{lesson.course}</p>
                        <p className="text-xs text-muted-foreground">{lesson.topic}</p>
                        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span className="truncate">{lesson.student}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-4 text-center text-xs text-muted-foreground">Нет занятий</div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
