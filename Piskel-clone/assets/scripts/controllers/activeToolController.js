import setActiveTool from './misc/setActiveTool';

export default function activeToolController() {
  const toolsList = document.getElementsByClassName('main__workspace__tools__items__tool');
  for (let i = 0; i < toolsList.length; i += 1) {
    toolsList[i].addEventListener('click', () => {
      setActiveTool(i);
    });
  }
}
