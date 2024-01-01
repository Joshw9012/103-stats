import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
