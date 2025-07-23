import Tournament from '../components/Tournament';
import { defaultSchedule, testSchedule } from '../utils';

export default function TournamentPage() {
  const schedules = [defaultSchedule, testSchedule];
  return <Tournament schedules={schedules} startingScheduleIndex={1} />;
}
