<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCard from './card';
import CCardString from '!raw-loader!./card';
import CNoticeCalendar from './notice-calendar';
import CNoticeCalendarString from '!raw-loader!./notice-calendar';
import CSelectableCalendar from './selectable-calendar';
import CSelectableCalendarString from '!raw-loader!./selectable-calendar';
import CCustomizeHeader from './customize-header';
import CCustomizeHeaderString from '!raw-loader!./customize-header';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Calendar 日历

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '日历',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Calendar',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CCardString}><CCard /></demo-container>

<demo-container code={CNoticeCalendarString}><CNoticeCalendar /></demo-container>

<demo-container code={CSelectableCalendarString}><CSelectableCalendar /></demo-container>

<demo-container code={CCustomizeHeaderString}><CCustomizeHeader /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>