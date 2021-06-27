import { useEffect, useState } from 'react';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from './redux/actions/messageAction';
import './css/App.css';
import './css/ResizeHandles.css';

function App() {
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(33);
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.allMessages);
  const addMessage = useSelector((state) => state.addMessage);
  const updateMessage = useSelector((state) => state.updateMessage);

  useEffect(() => {
    dispatch(getMessages());
  }, [addMessage, updateMessage]);

  const onResize = (event, { element, size, handle }) => {
    setWidth(size.width);
    setHeight(size.height);
  };
  return (
    <>
      <div className="container">
        <div className="container--flex">
          <TopSection
            width={width}
            height={height}
            onResize={onResize}
            count={data?.data.length}
          />
          <BottomSection
            width={width}
            height={height}
            onResize={onResize}
            listData={data?.data}
          />
        </div>
      </div>
    </>
  );
}

export default App;
