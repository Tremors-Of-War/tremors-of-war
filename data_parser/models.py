import abc


class Model:
    def to_dict(self):
        raise NotImplementedError()


class Stats:
    def __init__(
        self,
        movement,
        weapon_skill,
        ballistic_skill,
        strength,
        toughness,
        wounds,
        initiative,
        attacks,
        cool,
        intelligence,
    ):
        self.movement = movement
        self.weapon_skill = weapon_skill
        self.ballistic_skill = ballistic_skill
        self.strength = strength
        self.toughness = toughness
        self.wounds = wounds
        self.initiative = initiative
        self.attacks = attacks
        self.cool = cool
        self.intelligence = intelligence

    def get_stat_dict(self):
        return {}


class BaselineStats(Stats):
    pass
