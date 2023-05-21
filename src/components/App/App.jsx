import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
// import upcomingEvents from '../../upcoming-events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile text="Profile" />
      <Statistics text="Statistics" />
      <FriendList text="FriendList" />
      <TransactionHistory text="TransactionHistory" />
    </Container>
  );
};
