<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CCustom from './custom';
import CCustomString from '!raw-loader!./custom';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。代码演示`
};

export default {
  category: 'Components',
  subtitle: '回到顶部',
  type: 'Other',
  zhType: '其他',
  cols: 2,
  title: 'BackTop',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CCustomString}><CCustom /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>