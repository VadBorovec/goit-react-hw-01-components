import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
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
