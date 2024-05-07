import "./MainSection.css";
import Card from "../Card/Card";
const MainSection = () => {
  let dataArr = [
    {
      quote:
        "I want my legacy to be the impact that I can have on young kids and the people in Iowa…I was just that young girl, so all you have to do is dream and you can be in moments like this",
      author: "Caitlin Clark",
      category: "business",
    },
    {
      quote:
        "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape.",
      author: "CHARLES DICKENS",
      category: "alone",
    },
    {
      quote:
        "People have inspirations for a reason. I don’t let those pressures get to me to make me feel like I need to be perfect. I’m human, too, and I make mistakes, and that doesn’t take away from what I do and the people I impact",
      author: "Alissa Pili",
      category: "learning",
    },
    {
      quote:
        "Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul",
      author: "Meg Rosof",
      category: "experience",
    },
    {
      quote:
        "Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul",
      author: "Niel Gaiman",
      category: "car",
    },
    {
      quote:
        "President Obama's version of America is a divided …, bumper sticker, or campaign ad can change that.",
      author: "Mia Love",
      category: "change",
    },

    {
      quote:
        "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
      author: "Mark twain",
      category: "god",
    },
    {
      quote:
        "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window..",
      author: "William Faulkner",
      category: "car",
    },
    {
      quote:
        "I'm most proud of the longevity of my marriage, my…don't have that, you really don't have very much.",
      author: "Bob Newhart",
      category: "marriage",
    },
    {
      quote:
        "Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.",
      author: "Kurt Vonnegut Jr.",
      category: "death",
    },
    {
      quote:
        "By helping readers understand these mechanics, I h…ant role in advancing democracy around the globe.",
      author: "Natan Sharansky",
      category: "freedom",
    },
    {
      quote:
        "When I started learning the cello, I fell in love …rument because it seemed like a voice - my voice.",
      author: "Mstislav Rostropovich",
      category: "learning",
    },
    {
      quote:
        "Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write.",
      author: "Rainer Maria Rilke",
      category: "experience",
    },
  ];
  

  // let api_key="yyu34QzObl9hHyD0d2IgPA==5hgQCx7jts48dZjw";
  return (
    <main className="main-box">
      {dataArr.map((item)=>{
        // console.log(item);
            return <Card key={item.author} item={item}/>
           })}

    </main>
  );
};

export default MainSection;

// let dataArr=[{quote:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus officia ad inventore minima modi similique excepturi voluptas. Voluptate culpa assumenda qui rerum reprehenderit minus deserunt beatae nobis eveniet non quod vitae, deleniti nulla ab eos?" ,
//     author:"Alebert Eiestien"
// }]




// async function getData() {
//     const headers = {
//       method: "GET",
//       url: "https://api.api-ninjas.com/v1/quotes?category=happiness",
//       headers: { "X-Api-Key": "yyu34QzObl9hHyD0d2IgPA==5hgQCx7jts48dZjw" },
//       contentType: "application/json",
//     };
//     let response = await fetch(
//       "https://api.api-ninjas.com/v1/quotes?",
//       headers
//     );
//     let data = await response.json();

//     dataArr = data;
//     console.log(dataArr);
//   }
//   getData();


    //   {/* <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card /> */}