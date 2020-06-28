<script>
import CBasicComment from './basic-comment';
import CBasicCommentString from '!raw-loader!./basic-comment';
import CUsageWithList from './usage-with-list';
import CUsageWithListString from '!raw-loader!./usage-with-list';
import CNestedComments from './nested-comments';
import CNestedCommentsString from '!raw-loader!./nested-comments';
import CReplyEditor from './reply-editor';
import CReplyEditorString from '!raw-loader!./reply-editor';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Comment评论

对网站内容的反馈、评价和讨论。

## 何时使用

评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。`
};

export default {
  category: 'Components',
  subtitle: '评论',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Comment',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicCommentString}><CBasicComment /></demo-container>
            <demo-container code={CUsageWithListString}><CUsageWithList /></demo-container>
            <demo-container code={CNestedCommentsString}><CNestedComments /></demo-container>
            <demo-container code={CReplyEditorString}><CReplyEditor /></demo-container>
          </a-col>
        </a-row>
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
