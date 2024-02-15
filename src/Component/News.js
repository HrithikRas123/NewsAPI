import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Kevin Liptak, MJ Lee",
      "title": "Biden growing more frustrated with Netanyahu as Gaza campaign rages on - CNN",
      "description": "President Joe Biden has grown increasingly frustrated behind the scenes with his Israeli counterpart Benjamin Netanyahu, telling advisers and others that the prime minister is ignoring his advice and obstructing efforts to alleviate the humanitarian crisis in…",
      "url": "https://www.cnn.com/2024/02/12/politics/biden-netanyahu-israel-gaza/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/untitled-2-20240212160207996.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-02-12T16:13:00Z",
      "content": "President Joe Biden has grown increasingly frustrated behind the scenes with his Israeli counterpart, Benjamin Netanyahu, telling advisers and others that the prime minister is ignoring his advice an… [+4983 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Zak Keefer",
      "title": "Chiefs defeat 49ers in OT of Super Bowl to cement dynasty status; Patrick Mahomes earns third MVP - The Athletic",
      "description": "It’s the fourth Super Bowl win for the Chiefs franchise and the third for the team under coach Andy Reid.",
      "url": "https://theathletic.com/5268544/2024/02/11/chiefs-49ers-super-bowl-win-result/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/02/11225920/GettyImages-2004169629-scaled.jpg",
      "publishedAt": "2024-02-12T16:10:16Z",
      "content": "LAS VEGAS The NFL has a repeat champion for the first time in 19 years. The Kansas City Chiefs, with a third Super Bowl triumph in five seasons, cemented their status as the leagues modern-day dynast… [+8123 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Ben Strauss",
      "title": "For Travis Kelce, Taylor Swift, Chiefs, ‘more attention is more fun’ - The Washington Post",
      "description": "Kelce, the 34-year-old tight end with a luxuriant beard, makes the Chiefs the closest thing this century to Michael Jordan’s Bulls.",
      "url": "https://www.washingtonpost.com/sports/2024/02/12/travis-kelce-taylor-swift-super-bowl/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5JG33YDBQWR2NPXJPESG3HGF3Q.jpg&w=1440",
      "publishedAt": "2024-02-12T15:47:00Z",
      "content": "LAS VEGAS In the corner of the Kansas City Chiefs locker room late Sunday night through the haze of cigar smoke and past a group of players dancing in a circle, the Lombardi Trophy held aloft Travis … [+4611 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Biggest takeaways from 49ers Super Bowl LVIII loss - NFL",
      "description": null,
      "url": "https://www.youtube.com/watch?v=qeOZZ_iCpz4",
      "urlToImage": null,
      "publishedAt": "2024-02-12T15:30:13Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": null,
        "name": "Niners Nation"
      },
      "author": "Marc Delucchi",
      "title": "49ers news: Positional grades from the crushing Super Bowl LVIII loss - Niners Nation",
      "description": "The San Francisco 49ers were a play away from a Super Bowl victory, but once again, they fell short to the Kansas City Chiefs",
      "url": "https://www.ninersnation.com/2024/2/12/24070265/position-grades-49ers-crushing-super-bowl-defeat-brock-purdy-christian-mccaffrey",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/CPa1mhPnn2NRA5P4kT-s5hFhxTk=/0x468:6530x3887/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25281144/1996271178.jpg",
      "publishedAt": "2024-02-12T15:10:12Z",
      "content": "The San Francisco 49ers fell short in Super Bowl LVIII, losing 25-22 in overtime to Patrick Mahomes and Kansas City. The 49ers led 16-13 with less than two minutes left in regulation. Then led 22-19 … [+5276 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters.com",
      "title": "Focus: Real estate pain for US regional banks is piling up, say investors - Reuters.com",
      "description": null,
      "url": "https://www.reuters.com/markets/us/real-estate-pain-us-regional-banks-is-piling-up-say-investors-2024-02-12/",
      "urlToImage": null,
      "publishedAt": "2024-02-12T14:54:00Z",
      "content": null
    },
  ]

  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d98927eb9ca3468c854ef4cbbd9aad06";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NEWS4U - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default News

