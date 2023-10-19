// ... (previous imports)

export default function Search(props) {
    const [searchiteam, setsearchiteam] = useState("");
    const [searchedImage, setSearchedImage] = useState([]);
  
    let Images = [
      {
        title: "Bike bajaj",
        image: bikeb,
      },
      {
        title: "Car BMW",
        image: carbmw,
      },
      {
        title: "Party APP",
        image: partyapp,
      },
      {
        title: "Party BJP",
        image: partybjp,
      },
    ];
  
    const searchclick = () => {
      const filteredImages = Images.filter((value) => {
        return value.title.toLowerCase().includes(searchiteam.toLowerCase());
      });
  
      setSearchedImage(filteredImages);
      console.log();
    };
  
    return (
      <>
        {/* ... (previous JSX) */}
        <div>
          {searchedImage.map((e) => (
            <div key={e.title}>
              <img src={e.image} alt={e.title} />
              <h1>{e.title}</h1>
              {console.log(e.title)}
            </div>
          ))}
        </div>
      </>
    );
  }
  