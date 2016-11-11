package po;

import java.util.ArrayList;
import java.util.List;

public class GzwMapmgeDictExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public GzwMapmgeDictExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Object value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Object value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Object value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Object value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Object value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Object value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Object> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Object> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Object value1, Object value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Object value1, Object value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andLayerNameIsNull() {
            addCriterion("LAYER_NAME is null");
            return (Criteria) this;
        }

        public Criteria andLayerNameIsNotNull() {
            addCriterion("LAYER_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andLayerNameEqualTo(Object value) {
            addCriterion("LAYER_NAME =", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameNotEqualTo(Object value) {
            addCriterion("LAYER_NAME <>", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameGreaterThan(Object value) {
            addCriterion("LAYER_NAME >", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_NAME >=", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameLessThan(Object value) {
            addCriterion("LAYER_NAME <", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_NAME <=", value, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameIn(List<Object> values) {
            addCriterion("LAYER_NAME in", values, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameNotIn(List<Object> values) {
            addCriterion("LAYER_NAME not in", values, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameBetween(Object value1, Object value2) {
            addCriterion("LAYER_NAME between", value1, value2, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerNameNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_NAME not between", value1, value2, "layerName");
            return (Criteria) this;
        }

        public Criteria andLayerTypeIsNull() {
            addCriterion("LAYER_TYPE is null");
            return (Criteria) this;
        }

        public Criteria andLayerTypeIsNotNull() {
            addCriterion("LAYER_TYPE is not null");
            return (Criteria) this;
        }

        public Criteria andLayerTypeEqualTo(Object value) {
            addCriterion("LAYER_TYPE =", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeNotEqualTo(Object value) {
            addCriterion("LAYER_TYPE <>", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeGreaterThan(Object value) {
            addCriterion("LAYER_TYPE >", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_TYPE >=", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeLessThan(Object value) {
            addCriterion("LAYER_TYPE <", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_TYPE <=", value, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeIn(List<Object> values) {
            addCriterion("LAYER_TYPE in", values, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeNotIn(List<Object> values) {
            addCriterion("LAYER_TYPE not in", values, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeBetween(Object value1, Object value2) {
            addCriterion("LAYER_TYPE between", value1, value2, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerTypeNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_TYPE not between", value1, value2, "layerType");
            return (Criteria) this;
        }

        public Criteria andLayerLevelIsNull() {
            addCriterion("LAYER_LEVEL is null");
            return (Criteria) this;
        }

        public Criteria andLayerLevelIsNotNull() {
            addCriterion("LAYER_LEVEL is not null");
            return (Criteria) this;
        }

        public Criteria andLayerLevelEqualTo(Object value) {
            addCriterion("LAYER_LEVEL =", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelNotEqualTo(Object value) {
            addCriterion("LAYER_LEVEL <>", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelGreaterThan(Object value) {
            addCriterion("LAYER_LEVEL >", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_LEVEL >=", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelLessThan(Object value) {
            addCriterion("LAYER_LEVEL <", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_LEVEL <=", value, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelIn(List<Object> values) {
            addCriterion("LAYER_LEVEL in", values, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelNotIn(List<Object> values) {
            addCriterion("LAYER_LEVEL not in", values, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelBetween(Object value1, Object value2) {
            addCriterion("LAYER_LEVEL between", value1, value2, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerLevelNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_LEVEL not between", value1, value2, "layerLevel");
            return (Criteria) this;
        }

        public Criteria andLayerUrlIsNull() {
            addCriterion("LAYER_URL is null");
            return (Criteria) this;
        }

        public Criteria andLayerUrlIsNotNull() {
            addCriterion("LAYER_URL is not null");
            return (Criteria) this;
        }

        public Criteria andLayerUrlEqualTo(Object value) {
            addCriterion("LAYER_URL =", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlNotEqualTo(Object value) {
            addCriterion("LAYER_URL <>", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlGreaterThan(Object value) {
            addCriterion("LAYER_URL >", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_URL >=", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlLessThan(Object value) {
            addCriterion("LAYER_URL <", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_URL <=", value, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlIn(List<Object> values) {
            addCriterion("LAYER_URL in", values, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlNotIn(List<Object> values) {
            addCriterion("LAYER_URL not in", values, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlBetween(Object value1, Object value2) {
            addCriterion("LAYER_URL between", value1, value2, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerUrlNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_URL not between", value1, value2, "layerUrl");
            return (Criteria) this;
        }

        public Criteria andLayerPidIsNull() {
            addCriterion("LAYER_PID is null");
            return (Criteria) this;
        }

        public Criteria andLayerPidIsNotNull() {
            addCriterion("LAYER_PID is not null");
            return (Criteria) this;
        }

        public Criteria andLayerPidEqualTo(Object value) {
            addCriterion("LAYER_PID =", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidNotEqualTo(Object value) {
            addCriterion("LAYER_PID <>", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidGreaterThan(Object value) {
            addCriterion("LAYER_PID >", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_PID >=", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidLessThan(Object value) {
            addCriterion("LAYER_PID <", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_PID <=", value, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidIn(List<Object> values) {
            addCriterion("LAYER_PID in", values, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidNotIn(List<Object> values) {
            addCriterion("LAYER_PID not in", values, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidBetween(Object value1, Object value2) {
            addCriterion("LAYER_PID between", value1, value2, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerPidNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_PID not between", value1, value2, "layerPid");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkIsNull() {
            addCriterion("LAYER_REMARK is null");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkIsNotNull() {
            addCriterion("LAYER_REMARK is not null");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkEqualTo(Object value) {
            addCriterion("LAYER_REMARK =", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkNotEqualTo(Object value) {
            addCriterion("LAYER_REMARK <>", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkGreaterThan(Object value) {
            addCriterion("LAYER_REMARK >", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_REMARK >=", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkLessThan(Object value) {
            addCriterion("LAYER_REMARK <", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_REMARK <=", value, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkIn(List<Object> values) {
            addCriterion("LAYER_REMARK in", values, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkNotIn(List<Object> values) {
            addCriterion("LAYER_REMARK not in", values, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkBetween(Object value1, Object value2) {
            addCriterion("LAYER_REMARK between", value1, value2, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerRemarkNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_REMARK not between", value1, value2, "layerRemark");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafIsNull() {
            addCriterion("LAYER_ISLEAF is null");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafIsNotNull() {
            addCriterion("LAYER_ISLEAF is not null");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafEqualTo(Object value) {
            addCriterion("LAYER_ISLEAF =", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafNotEqualTo(Object value) {
            addCriterion("LAYER_ISLEAF <>", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafGreaterThan(Object value) {
            addCriterion("LAYER_ISLEAF >", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_ISLEAF >=", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafLessThan(Object value) {
            addCriterion("LAYER_ISLEAF <", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_ISLEAF <=", value, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafIn(List<Object> values) {
            addCriterion("LAYER_ISLEAF in", values, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafNotIn(List<Object> values) {
            addCriterion("LAYER_ISLEAF not in", values, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafBetween(Object value1, Object value2) {
            addCriterion("LAYER_ISLEAF between", value1, value2, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerIsleafNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_ISLEAF not between", value1, value2, "layerIsleaf");
            return (Criteria) this;
        }

        public Criteria andLayerOrderIsNull() {
            addCriterion("LAYER_ORDER is null");
            return (Criteria) this;
        }

        public Criteria andLayerOrderIsNotNull() {
            addCriterion("LAYER_ORDER is not null");
            return (Criteria) this;
        }

        public Criteria andLayerOrderEqualTo(Object value) {
            addCriterion("LAYER_ORDER =", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderNotEqualTo(Object value) {
            addCriterion("LAYER_ORDER <>", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderGreaterThan(Object value) {
            addCriterion("LAYER_ORDER >", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_ORDER >=", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderLessThan(Object value) {
            addCriterion("LAYER_ORDER <", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_ORDER <=", value, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderIn(List<Object> values) {
            addCriterion("LAYER_ORDER in", values, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderNotIn(List<Object> values) {
            addCriterion("LAYER_ORDER not in", values, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderBetween(Object value1, Object value2) {
            addCriterion("LAYER_ORDER between", value1, value2, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerOrderNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_ORDER not between", value1, value2, "layerOrder");
            return (Criteria) this;
        }

        public Criteria andLayerValueIsNull() {
            addCriterion("LAYER_VALUE is null");
            return (Criteria) this;
        }

        public Criteria andLayerValueIsNotNull() {
            addCriterion("LAYER_VALUE is not null");
            return (Criteria) this;
        }

        public Criteria andLayerValueEqualTo(Object value) {
            addCriterion("LAYER_VALUE =", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueNotEqualTo(Object value) {
            addCriterion("LAYER_VALUE <>", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueGreaterThan(Object value) {
            addCriterion("LAYER_VALUE >", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueGreaterThanOrEqualTo(Object value) {
            addCriterion("LAYER_VALUE >=", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueLessThan(Object value) {
            addCriterion("LAYER_VALUE <", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueLessThanOrEqualTo(Object value) {
            addCriterion("LAYER_VALUE <=", value, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueIn(List<Object> values) {
            addCriterion("LAYER_VALUE in", values, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueNotIn(List<Object> values) {
            addCriterion("LAYER_VALUE not in", values, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueBetween(Object value1, Object value2) {
            addCriterion("LAYER_VALUE between", value1, value2, "layerValue");
            return (Criteria) this;
        }

        public Criteria andLayerValueNotBetween(Object value1, Object value2) {
            addCriterion("LAYER_VALUE not between", value1, value2, "layerValue");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}