package mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import po.GzwMapmgeDict;
import po.GzwMapmgeDictExample;

public interface GzwMapmgeDictMapper {
    int countByExample(GzwMapmgeDictExample example);

    int deleteByExample(GzwMapmgeDictExample example);

    int insert(GzwMapmgeDict record);

    int insertSelective(GzwMapmgeDict record);

    List<GzwMapmgeDict> selectByExample(GzwMapmgeDictExample example);

    int updateByExampleSelective(@Param("record") GzwMapmgeDict record, @Param("example") GzwMapmgeDictExample example);

    int updateByExample(@Param("record") GzwMapmgeDict record, @Param("example") GzwMapmgeDictExample example);

	List<Map> getHostdepartment();
}