import { 
    HomeSectionOne, HomeSectionTwo, HomeSectionThree,
} from "./Home";



const HomeBody = () => {
  return (
    <div className="home-sections max-container">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
    </div>
  );
};
export default HomeBody;