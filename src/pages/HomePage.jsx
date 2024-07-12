import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobsListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobsListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
