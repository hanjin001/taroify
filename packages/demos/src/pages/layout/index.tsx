import classes from "./index.module.scss"
import "@vant-taro/core/index.scss"
import Page from "../../components/page"
import Block from "../../components/block"
import Row from "@vant-taro/core/row"
import Col from "@vant-taro/core/col"

export default function Layout() {
  return (
    <Page title="布局" className={classes.Layout}>
      <Block title="基础用法">
        <Row>
          <Col span="8">span: 8</Col>
          <Col span="8">span: 8</Col>
          <Col span="8">span: 8</Col>
        </Row>
      </Block>
      <Block title="在列元素之间增加间距">
        <Row gutter={12}>
          <Col span="8">span: 8</Col>
          <Col span="8">span: 8</Col>
          <Col span="8">span: 8</Col>
        </Row>
      </Block>
      <Block title="Flex 布局">
        <Row>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
        </Row>
        <Row>
          <Col offset="3" span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
        </Row>
        <Row>
          <Col offset="6" span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
        </Row>
        <Row justify="space-between">
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
        </Row>
        <Row justify="space-around">
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
          <Col span="6">span: 6</Col>
        </Row>
      </Block>
    </Page>
  )
}