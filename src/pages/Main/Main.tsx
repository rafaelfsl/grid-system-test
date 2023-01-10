import VerticalBar from "../../components/VerticalBar/VerticalBar";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Main = () => {
  return (
    <MainLayout>
      <VerticalBar num={1} />
      <VerticalBar num={2} color="white" />
      <VerticalBar num={3} />
      <VerticalBar num={4} />
      <VerticalBar num={5} />
      <VerticalBar num={6} />
      <VerticalBar num={7} />
      <VerticalBar num={8} />
      <VerticalBar num={9} />
      <VerticalBar num={10} />
      <VerticalBar num={11} />
      <VerticalBar num={12} />
    </MainLayout>
  );
};

export default Main;
