import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useChildrenBlocks } from '$engine/render/hooks/useChildrenBlocks';
import { BasicInputReturnType } from '../../hooks/types';
import { useStyleClass } from '../../styleContext';
import { useTheme } from '../../theme';

enum Verb {
  is = 'is',
  isNot = 'is-not',
  notContain = 'not-contain',
  all = 'all',
  any = 'any',
  none = 'none',
}

type VerbType =
  | Verb.is
  | Verb.isNot
  | Verb.notContain
  | Verb.all
  | Verb.any
  | Verb.none;

interface Condition {
  subject: string;
  verb: VerbType;
  object: string;
}

interface Conditions {
  If: Condition[];
  ElseifContainer: Condition[][];
}

const isThemeValidation = (condition: Condition, currentTheme: string) =>
  condition.object === currentTheme;
const isNotThemeValidation = (condition: Condition, currentTheme: string) =>
  condition.object !== currentTheme;

const ThemeVerbs = {
  is: isThemeValidation,
  isNot: isNotThemeValidation,
};

const IfConditionValidate = (conditions: Conditions, currentTheme: string) => {
  const result: boolean[] = [];
  if (conditions.If) {
    conditions.If.forEach((condition) => {
      if (condition.subject === 'theme') {
        if (condition.verb == Verb.is) {
          const tValidation = ThemeVerbs.is(condition, currentTheme);
          result.push(tValidation);
        } else if (condition.verb == Verb.isNot) {
          const tValidation = ThemeVerbs.isNot(condition, currentTheme);
          result.push(tValidation);
        } else {
          result.push(false);
        }
      }
    });
  }
  return result;
};

const ElseIfConditionValidate = (
  conditions: Conditions,
  currentTheme: string
) => {
  if (conditions.ElseifContainer) {
    return conditions.ElseifContainer.map((condition) => {
      const result: boolean[] = [];
      condition.forEach((condition) => {
        if (condition.subject === 'theme') {
          if (condition.verb == Verb.is) {
            const tValidation = ThemeVerbs.is(condition, currentTheme);
            result.push(tValidation);
          } else if (condition.verb == Verb.isNot) {
            const tValidation = ThemeVerbs.isNot(condition, currentTheme);
            result.push(tValidation);
          } else {
            result.push(false);
          }
        }
      });
      return result;
    }).filter((fc) => fc.length);
  }
  return [];
};

export const ConditionThemeComponent: FC<{
  inputObject: BasicInputReturnType;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const childrens = useChildrenBlocks(subSchema.blocks);

  const { currentTheme } = useTheme();

  const conditions = useMemo(
    () => subSchema.conditions as Conditions,
    [subSchema.conditions]
  );

  const Validate = useCallback(() => {
    const IfCondition = IfConditionValidate(conditions, currentTheme).filter(
      (condition) => condition === false
    );
    const ElseIfCondition = ElseIfConditionValidate(conditions, currentTheme);

    const r = ElseIfCondition.filter((elifcondition) =>
      elifcondition.find((elifV) => elifV === true)
    );

    if (!IfCondition.length) {
      return true;
    } else if (r.length) {
      return true;
    }
    return false;
  }, [conditions, currentTheme]);

  const isValid = useMemo(() => Validate(), [Validate]);

  return <View style={styles.container}>{isValid && childrens}</View>;
};
