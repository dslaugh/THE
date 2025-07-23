import Tournament from '../components/Tournament';
import { schedules } from '../utils';

export default function TournamentPage() {
  return <Tournament schedules={schedules} startingScheduleIndex={1} />;
}
