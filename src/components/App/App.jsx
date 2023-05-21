import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
// import upcomingEvents from '../../upcoming-events.json';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile text="Profile" />
      </Section>
      <Section>
        <Statistics text="Statistics" />
      </Section>
      <Section>
        <FriendList text="FriendList" />
      </Section>
      <Section>
        <TransactionHistory text="TransactionHistory" />
      </Section>
    </Container>
  );
};
