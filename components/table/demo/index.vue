<script>
import CBasicUsage from './basic-usage';
import CBasicUsageString from '!raw-loader!./basic-usage';
import CEllipsisColumn from './ellipsis-column';
import CEllipsisColumnString from '!raw-loader!./ellipsis-column';
import CAjax from './ajax';
import CAjaxString from '!raw-loader!./ajax';
import CBorder_TitleAndFooter from './border_-title-and-footer';
import CBorder_TitleAndFooterString from '!raw-loader!./border_-title-and-footer';
import CColspanAndRowspan from './colspan-and-rowspan';
import CColspanAndRowspanString from '!raw-loader!./colspan-and-rowspan';
import CCustomizedFilterPanel from './customized-filter-panel';
import CCustomizedFilterPanelString from '!raw-loader!./customized-filter-panel';
import CEditableCells from './editable-cells';
import CEditableCellsString from '!raw-loader!./editable-cells';
import CEditableRows from './editable-rows';
import CEditableRowsString from '!raw-loader!./editable-rows';
import CTreeData from './tree-data';
import CTreeDataString from '!raw-loader!./tree-data';
import CExpandableRow from './expandable-row';
import CExpandableRowString from '!raw-loader!./expandable-row';
import CFixedColumnsAndHeader from './fixed-columns-and-header';
import CFixedColumnsAndHeaderString from '!raw-loader!./fixed-columns-and-header';
import CFixedColumns from './fixed-columns';
import CFixedColumnsString from '!raw-loader!./fixed-columns';
import CFixedHeader from './fixed-header';
import CFixedHeaderString from '!raw-loader!./fixed-header';
import CGroupingTableHead from './grouping-table-head';
import CGroupingTableHeadString from '!raw-loader!./grouping-table-head';
import CFilterAndSorter from './filter-and-sorter';
import CFilterAndSorterString from '!raw-loader!./filter-and-sorter';
import CNestedTables from './nested-tables';
import CNestedTablesString from '!raw-loader!./nested-tables';
import CResetFiltersAndSorters from './reset-filters-and-sorters';
import CResetFiltersAndSortersString from '!raw-loader!./reset-filters-and-sorters';
import CSelectionAndOperation from './selection-and-operation';
import CSelectionAndOperationString from '!raw-loader!./selection-and-operation';
import CCustomSelection from './custom-selection';
import CCustomSelectionString from '!raw-loader!./custom-selection';
import CSelection from './selection';
import CSelectionString from '!raw-loader!./selection';
import CSize from './size';
import CSizeString from '!raw-loader!./size';
import CTemplateStyleApi from './template-style-api';
import CTemplateStyleApiString from '!raw-loader!./template-style-api';
import CResizableColumn from './resizable-column';
import CResizableColumnString from '!raw-loader!./resizable-column';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 \`dataSource\` 为一个数组。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '表格',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Table',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicUsageString}><CBasicUsage /></demo-container>
            <demo-container code={CEllipsisColumnString}><CEllipsisColumn /></demo-container>
            <demo-container code={CAjaxString}><CAjax /></demo-container>
            <demo-container code={CBorder_TitleAndFooterString}><CBorder_TitleAndFooter /></demo-container>
            <demo-container code={CColspanAndRowspanString}><CColspanAndRowspan /></demo-container>
            <demo-container code={CCustomizedFilterPanelString}><CCustomizedFilterPanel /></demo-container>
            <demo-container code={CEditableCellsString}><CEditableCells /></demo-container>
            <demo-container code={CEditableRowsString}><CEditableRows /></demo-container>
            <demo-container code={CTreeDataString}><CTreeData /></demo-container>
            <demo-container code={CExpandableRowString}><CExpandableRow /></demo-container>
            <demo-container code={CFixedColumnsAndHeaderString}><CFixedColumnsAndHeader /></demo-container>
            <demo-container code={CFixedColumnsString}><CFixedColumns /></demo-container>
            <demo-container code={CFixedHeaderString}><CFixedHeader /></demo-container>
            <demo-container code={CGroupingTableHeadString}><CGroupingTableHead /></demo-container>
            <demo-container code={CFilterAndSorterString}><CFilterAndSorter /></demo-container>
            <demo-container code={CNestedTablesString}><CNestedTables /></demo-container>
            <demo-container code={CResetFiltersAndSortersString}><CResetFiltersAndSorters /></demo-container>
            <demo-container code={CSelectionAndOperationString}><CSelectionAndOperation /></demo-container>
            <demo-container code={CCustomSelectionString}><CCustomSelection /></demo-container>
            <demo-container code={CSelectionString}><CSelection /></demo-container>
            <demo-container code={CSizeString}><CSize /></demo-container>
            <demo-container code={CTemplateStyleApiString}><CTemplateStyleApi /></demo-container>
            <demo-container code={CResizableColumnString}><CResizableColumn /></demo-container>
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
