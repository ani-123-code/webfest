import AnimatedHero from '../components/AnimatedHero';
import Services from '../components/Services';
// import Stats from '../components/Stats';
// import HouseholdGuide from '../components/HouseholdGuide';
import RequestPickup from '../components/RequestPickup';
import HowWeHelp from '../components/HowWeHelp';
import CommunityPrograms from '../components/CommunityPrograms';
import CollectionCategories from '../components/CollectionCategories';
import RecyclingPrinciples from '../components/RecyclingPrinciples';
import WasteGuide from '../components/WasteGuide';
import ProductsWeHave from '../components/ProductsWeHave';

export default function Home() {
  return (
     <main>
      <div className="pt-20 sm:pt-24 md:pt-0">
        <AnimatedHero />
      </div>
      <ProductsWeHave />
      <RecyclingPrinciples/>
      <WasteGuide/>
      <CollectionCategories />
      <Services />
      {/* <Stats /> */}
      <HowWeHelp />
      <CommunityPrograms />
      {/* <HouseholdGuide /> */}
      <RequestPickup />
    </main>
  );
}