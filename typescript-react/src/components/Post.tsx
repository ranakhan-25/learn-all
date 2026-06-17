import Button from "./Button"
import Card from "./Card"


const Post = () => {
  return (
    <Card>
      <h1>This is title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam? Nesciunt praesentium cumque magnam molestias. Dolore, quis incidunt magni laborum at quia molestiae distinctio voluptas.</p>
      <Button myStyle="bg-red-500 inline-block m-5 px-10 py-2 rounded-2xl">Click</Button>
    </Card>
  )
}

export default Post