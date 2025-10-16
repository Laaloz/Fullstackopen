const Header = ({ title, level = 2 }) => {
  const lvl = Math.min(6, Math.max(1, Number(level) || 2))
  const Tag = `h${lvl}`
  return <Tag>{title}</Tag>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>total of {total} exercises</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.title} level={1} />
      <Header title={course.name} level={2} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course