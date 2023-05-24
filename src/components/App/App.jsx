import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import { Heading } from 'components/Heading/Heading.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Profile
        </Heading>
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
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Statistics
        </Heading>
        <Statistics title="Upload Stats" stats={data} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Friend List
        </Heading>
        <FriendList friendList={friends} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Transaction History
        </Heading>
        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
};
