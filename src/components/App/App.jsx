import {
  Profile,
  Container,
  Section,
  Heading,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center"></Heading>
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
          Task 2
        </Heading>
        <Statistics text="Statistics" />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <FriendList text="FriendList" />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <TransactionHistory text="TransactionHistory" />
      </Container>
    </Section>
  );
};
