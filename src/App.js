import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Buy and Sell NFTs Like a Pro - Interactive Marketplace Simulator"
        description="Gorilla NFT is a university project of mobile development for Android."
        showBtn
        mockupImg={assets.logo}
        banner="banner"
      />
      <SectionWrapper 
        title="Buy and Sell"
        description="From collectible to avatars, gaming , music and more. If you are looking to build you own marketplace, this simulator is a perfect example."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Real-time exchange"
        description="Gorilla NFT utilizes APIs to seamlessly and instantaneously convert Ethereum into US dollars and vice versa, making it easy to buy and sell your favorite digital assets."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Admin Panel"
        description="The app's comprehensive admin panel allows you to easily monitor activity, enforce rules, delete inappropriate content, and respond to user inquiries without any coding knowledge required."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
       <a href="https://emanuelesgroi.com" rel="noreferrer" target="_blank"><span className="portfolio">Emanuele Sgroi</span></a> 
        </p>
      </div>
    </>
  );
}

export default App;