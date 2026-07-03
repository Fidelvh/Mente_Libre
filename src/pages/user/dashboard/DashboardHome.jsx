import WelcomeBlock from "@/components/dashboard/WelcomeBlock";
import EmotionalCheckIn from "@/components/dashboard/EmotionalCheckIn";
import ActionCard from "@/components/dashboard/ActionCard";
import ProgressHint from "@/components/dashboard/ProgressHint";
import MicroExercise from "@/components/dashboard/MicroExercise";


export default function DashboardHome() {
  return (
    <div className="space-y-10">
      <WelcomeBlock />
      <EmotionalCheckIn />
      <ActionCard />
      <ProgressHint /> 
     <MicroExercise />
   </div>
  );
}
