import SectionLabel from 'components/atoms/SectionLabel/SectionLabel';
import HomeCard from 'components/molecules/HomeCard/HomeCard';

import HomeHeaderSection from 'components/molecules/HomeHeaderSection/HomeHeaderSection';
import React from 'react';
import {View} from 'react-native';

interface HomeOrganismsProps {}

const HomeOrganisms = (props: HomeOrganismsProps) => {
  return (
    <View>
      <HomeHeaderSection />
      <SectionLabel leftText={`Today's Schedule`} rightText={'Refresh'} />
      <HomeCard />
      <SectionLabel leftText={`Next Schedule`} rightText={'See all'} />
    </View>
  );
};

export default HomeOrganisms;
