import GlobalFonts from './tokens/fonts';
import GlobalResets from './tokens/resets';
import GlobalColors from './tokens/colors';
import GlobalGradients from './tokens/gradients';
import GlobalShadows from './tokens/shadows';
import SpriteWithIcons from './tokens/icons';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalResets />
      <GlobalColors />
      <GlobalGradients />
      <GlobalShadows />
      <SpriteWithIcons />
    </>
  );
}

export default App;
