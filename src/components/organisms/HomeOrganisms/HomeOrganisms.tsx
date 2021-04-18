import ClockButton from 'components/atoms/ClockButton/ClockButton';
import SectionLabel from 'components/atoms/SectionLabel/SectionLabel';
import HomeCard from 'components/molecules/HomeCard/HomeCard';
import HomeHeaderSection from 'components/molecules/HomeHeaderSection/HomeHeaderSection';
import HomeScheduleCard from 'components/molecules/HomeScheduleCard/HomeScheduleCard';
import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './HomeOrganismsStyles';
import {Schedule} from 'src/types/DataTypes';

interface HomeOrganismsProps {
  dataSchedule: Schedule[];
}

const HomeOrganisms = (props: HomeOrganismsProps) => {
  const {dataSchedule} = props;
  return (
    <View>
      <HomeHeaderSection />
      <SectionLabel leftText={`Today's Schedule`} rightText={'Refresh'} />
      <HomeCard />
      <SectionLabel leftText={`Next Schedule`} rightText={'See all'} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dataSchedule.map((item, index) => {
          return (
            <HomeScheduleCard
              data={item}
              key={index}
              index={index}
              last={dataSchedule.length}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ClockButton size={'big'} position={'left'} text={'Clock In'} />
        <ClockButton size={'big'} position={'right'} text={'Clock Out'} />
      </View>
    </View>
  );
};

export default HomeOrganisms;
